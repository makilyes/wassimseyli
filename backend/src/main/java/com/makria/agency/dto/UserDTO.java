package com.makria.agency.dto;

import com.makria.agency.entity.User;

public class UserDTO {
    private long id;

    private String name;
    private String email;
    private String username;
    private String role;

    public UserDTO(User user) {
        this.name=user.getName();
        this.email=user.getEmail();
        this.username= user.getUsername();
        this.role=user.getRole();
        this.id=user.getId();
    }

    public long getId() {
        return id;
    }

    public UserDTO(long id, String name, String email, String username, String role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.role = role;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
