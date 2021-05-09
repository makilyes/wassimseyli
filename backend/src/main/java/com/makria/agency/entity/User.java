package com.makria.agency.entity;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "username"
        }),
        @UniqueConstraint(columnNames = {
                "email"
        })
})
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @Size(min=1, max = 50)
    private String name;

    @NotBlank
    @Size(min=3, max = 50)
    private String username;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    @Column(name="image", length=1000000)
    private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getWaitingList() {
        return waitingList;
    }

    public void setWaitingList(String waitingList) {
        this.waitingList = waitingList;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    private String waitingList;


    private String address;


    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Size(min=3, max = 50)
    private String status;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    public String phone;

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @NotBlank
    @Size(min=1, max = 100)
    private String password;

    public String getCoachName() {
        return coachName;
    }

    public void setCoachName(String coachName) {
        this.coachName = coachName;
    }

    private String coachName;


    @NotBlank
    @Size(min=5, max = 100)
    private String role;

    private LocalDateTime dateUpdated;

    public LocalDateTime getDateUpdated() {
        return dateUpdated;
    }

    public void setDateUpdated(LocalDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
    }

    public String getWaitingListStatus() {
        return waitingListStatus;
    }

    public void setWaitingListStatus(String waitingListStatus) {
        this.waitingListStatus = waitingListStatus;
    }

    private String waitingListStatus;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public User() {}

    public User(String firstname, String username, String email, String password)  {
        this.name = firstname;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && name.equals(user.name) && username.equals(user.username) && image.equals(user.image) && waitingList.equals(user.waitingList) && address.equals(user.address) && status.equals(user.status) && email.equals(user.email) && phone.equals(user.phone) && password.equals(user.password) && coachName.equals(user.coachName) && role.equals(user.role) && dateUpdated.equals(user.dateUpdated) && waitingListStatus.equals(user.waitingListStatus);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, username, image, waitingList, address, status, email, phone, password, coachName, role, dateUpdated, waitingListStatus);
    }
}