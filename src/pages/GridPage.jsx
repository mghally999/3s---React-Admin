import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow } from "../redux/dataSlice";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  PrimaryButton,
  SearchBox,
  Stack,
  Dropdown,
} from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Pagination from "../components/Pagination";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import "../styles/GridPage.css";

const GridPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const data = useSelector((state) => state.data.data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const roleOptions = [
    { key: "", text: t("All Roles") },
    { key: "Admin", text: t("Admin") },
    { key: "User", text: t("User") },
  ];

  const statusOptions = [
    { key: "", text: t("All Statuses") },
    { key: "Active", text: t("Active") },
    { key: "Inactive", text: t("Inactive") },
  ];

  const translatedData = data.map((user) => ({
    ...user,
    role: t(user.role),
    status: t(user.status),
  }));

  const filteredData = translatedData.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (roleFilter ? user.role === roleFilter : true) &&
      (statusFilter ? user.status === statusFilter : true)
  );

  const handleSort = (fieldName) => {
    setSortDirection((prev) =>
      sortField === fieldName && prev === "asc" ? "desc" : "asc"
    );
    setSortField(fieldName);
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    const valA = a[sortField].toLowerCase();
    const valB = b[sortField].toLowerCase();
    return sortDirection === "asc"
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });

  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openDeleteModal = (userId) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedUserId) {
      dispatch(deleteRow(selectedUserId));
    }
    setIsModalOpen(false);
  };

  const columns = [
    {
      key: "avatar",
      name: t("Avatar"),
      fieldName: "avatar",
      minWidth: 50,
      maxWidth: 70,
      onRender: (item) => (
        <img src={item.avatar} alt="avatar" className="avatar" />
      ),
    },
    {
      key: "name",
      name: (
        <span onClick={() => handleSort("name")}>
          {t("Name")}{" "}
          {sortField === "name" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
        </span>
      ),
      fieldName: "name",
      minWidth: 150,
      onRender: (item) => <span>{item.name}</span>,
    },
    {
      key: "email",
      name: (
        <span onClick={() => handleSort("email")}>
          {t("Email")}{" "}
          {sortField === "email" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
        </span>
      ),
      fieldName: "email",
      minWidth: 200,
      onRender: (item) => <span>{item.email}</span>,
    },
    {
      key: "role",
      name: (
        <Dropdown
          selectedKey={roleFilter}
          placeholder={t("Role")}
          options={roleOptions}
          onChange={(_, option) => setRoleFilter(option.key)}
        />
      ),
      fieldName: "role",
      minWidth: 120,
      onRender: (item) => <span>{item.role}</span>,
    },
    {
      key: "status",
      name: (
        <Dropdown
          selectedKey={statusFilter}
          placeholder={t("Status")}
          options={statusOptions}
          onChange={(_, option) => setStatusFilter(option.key)}
        />
      ),
      fieldName: "status",
      minWidth: 120,
      onRender: (item) => <span>{item.status}</span>,
    },
    {
      key: "createdAt",
      name: t("Created At"),
      fieldName: "createdAt",
      minWidth: 150,
    },
    {
      key: "actions",
      name: t("Actions"),
      minWidth: 150,
      onRender: (item) => (
        <div className="action-buttons">
          <PrimaryButton
            text={t("View")}
            onClick={() => navigate(`/view/${item.id}`)}
          />
          <PrimaryButton
            text={t("Delete")}
            onClick={() => openDeleteModal(item.id)}
            className="delete-btn"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="grid-container">
      <h2>{t("User Management")}</h2>
      <Stack tokens={{ childrenGap: 10 }}>
        <SearchBox
          placeholder={t("Search by name or email")}
          onChange={(_, newValue) => setSearchQuery(newValue || "")}
          className="search-box"
        />
      </Stack>
      <DetailsList
        items={paginatedData}
        columns={columns}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        selectionMode={SelectionMode.none}
        className="details-list"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredData.length / itemsPerPage)}
        onChange={setCurrentPage}
      />
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default GridPage;
