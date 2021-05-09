package com.makria.agency.dto;

import javax.validation.constraints.NotBlank;

public class PasswordForm {
    @NotBlank
    private String newPassword;


    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
