package com.makria.agency.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartDTO {
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
}
