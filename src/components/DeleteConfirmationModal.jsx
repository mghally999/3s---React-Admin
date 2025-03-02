import React from "react";
import {
  Dialog,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
} from "@fluentui/react";
import { useTranslation } from "react-i18next";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();

  return (
    <Dialog
      hidden={!isOpen}
      onDismiss={onClose}
      dialogContentProps={{
        title: t("Confirm Deletion"),
        subText: t(
          "Are you sure you want to delete this user? This action cannot be undone."
        ),
      }}
    >
      <DialogFooter>
        <PrimaryButton text={t("Delete")} onClick={onConfirm} />
        <DefaultButton text={t("Cancel")} onClick={onClose} />
      </DialogFooter>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
