package com.makria.agency.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AmazonConfig {

//    @Bean
//    public AmazonS3 S3 () {
//        AWSCredentials awsCredentials = new BasicAWSCredentials(
//                "AKIA6IGZGT6PBIDMNIN5",
//                "G368KB73mEdkIXf87+/Y3a8OD5lBPSBfQ2Xb1Lfb"
//        );
//        return AmazonS3ClientBuilder
//                .standard()
//                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
//                .build();
//    }
}
