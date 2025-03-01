import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow } from "../redux/dataSlice";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  PrimaryButton,
  SearchBox,
} from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Pagination from "../components/Pagination";
import "../styles/GridPage.css";

const GridPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const data = useSelector((state) => state.data.data);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const translatedData = data.map((user) => ({
    ...user,
    role: t(user.role),
    status: t(user.status),
  }));

  const filteredData = translatedData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSort = (fieldName) => {
    const newDirection =
      sortField === fieldName && sortDirection === "asc" ? "desc" : "asc";
    setSortField(fieldName);
    setSortDirection(newDirection);
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

  const columns = [
    {
      key: "avatar",
      name: t("Avatar"),
      fieldName: "avatar",
      minWidth: 50,
      onRender: (item) => (
        <img src={item.avatar} alt="avatar" className="avatar" />
      ),
    },
    {
      key: "name",
      name: t("Name"),
      fieldName: "name",
      minWidth: 150,
      onClick: () => handleSort("name"),
    },
    { key: "email", name: t("Email"), fieldName: "email", minWidth: 200 },
    { key: "role", name: t("Role"), fieldName: "role", minWidth: 100 },
    { key: "status", name: t("Status"), fieldName: "status", minWidth: 100 },
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
            onClick={() => dispatch(deleteRow(item.id))}
            className="delete-btn"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="grid-container">
      <h2>{t("User Management")}</h2>
      <SearchBox
        placeholder={t("Search by name")}
        onChange={(_, newValue) => setSearchQuery(newValue || "")}
      />
      <DetailsList
        items={paginatedData}
        columns={columns}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        selectionMode={SelectionMode.none}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredData.length / itemsPerPage)}
        onChange={setCurrentPage}
      />
    </div>
  );
};

export default GridPage;
