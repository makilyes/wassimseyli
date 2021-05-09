package com.makria.agency.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
@Table(name = "cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String orderType;
    private String websiteType;
    private String packageType;
    private Integer pages;
    private Integer products;
    private boolean useWordpress;
    private String projectName;
    private String projectDetail;
    private String file;
    private String typeOfBranding;
    private String URL;
    private Long userId;
    private Integer price;
    private String status;

}
