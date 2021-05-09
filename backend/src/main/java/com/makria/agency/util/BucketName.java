package com.makria.agency.util;

public enum BucketName {

    PROFILE_IMAGE("wassimseyli-image-upload-123");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
