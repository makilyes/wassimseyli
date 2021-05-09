package com.makria.agency.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ContactDTO {
    @NotBlank
    @Size(min=1, max = 60)
    private String name;

    @NotBlank
    @Size(min = 2, max = 80)
    private String type;

    @NotBlank
    @Size(min=3, max = 600)
    private String message;

    @NotBlank
    @Size(min = 6, max = 40)
    private String email;

}
