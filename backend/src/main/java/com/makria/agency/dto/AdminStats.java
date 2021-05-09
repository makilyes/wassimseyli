package com.makria.agency.dto;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class AdminStats {

    private Integer revenue;
    private Integer waitingList;

    private Integer users;
    private Double waitingListPercentage;
    private Double salesPercentage;

    public Double getWaitingListPercentage() {
        return waitingListPercentage;
    }

    public void setWaitingListPercentage(Double waitingListPercentage) {
        this.waitingListPercentage = waitingListPercentage;
    }

    public Double getSalesPercentage() {
        return salesPercentage;
    }

    public void setSalesPercentage(Double salesPercentage) {
        this.salesPercentage = salesPercentage;
    }

    public Integer getRevenue() {
        return revenue;
    }

    public void setRevenue(Integer revenue) {
        this.revenue = revenue;
    }

    public Integer getWaitingList() {
        return waitingList;
    }

    public void setWaitingList(Integer waitingList) {
        this.waitingList = waitingList;
    }

    public Integer getUsers() {
        return users;
    }

    public void setUsers(Integer users) {
        this.users = users;
    }
}
