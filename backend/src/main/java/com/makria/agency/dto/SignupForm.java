package com.makria.agency.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignupForm {
    @NotBlank
    @Size(min = 1, max = 50)
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @NotBlank
    @Size(max = 60)
    @Email
    private String email;

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    @NotBlank
    @Size(max = 60)
    private String userType;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getWaitingList() {
        return waitingList;
    }

    public void setWaitingList(String waitingList) {
        this.waitingList = waitingList;
    }

//    @NotBlank
    @Size(min = 1, max = 40)
    private String waitingList;

    @NotBlank
    @Size(min = 1, max = 40)
    private String password;

    public String getPhone() {
        return phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    private String address;

    private String image;

    @NotBlank
    @Size(min = 1, max = 40)
    private String phone;

}
