package com.makria.agency.dto;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class JwtResponse {
    private String token;
    private String type = "Bearer";

    public String getCoachName() {
        return coachName;
    }

    public void setCoachName(String coachName) {
        this.coachName = coachName;
    }

    private String username;
    private String name;
    private String phone;
    private long userId;
    private String coachName;
    private Collection<? extends GrantedAuthority> authorities;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public JwtResponse(String accessToken, String username, Collection<? extends GrantedAuthority> authorities, long id, String coachName, String name, String phone) {
        this.token = accessToken;
        this.username = username;
        this.authorities = authorities;
        this.userId =id;
        this.name=name;
        this.phone=phone;
        this.coachName = coachName;
    }

    public String getAccessToken() {
        return token;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

}


