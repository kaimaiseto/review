package com.sphord.review.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author: yejin
 * @Date: 2020/5/25 20:46
 * @Description: 测试controller
 */
@Controller
public class TestController {

    @RequestMapping(value = "/index")
    public String index() {
        return "index";
    }
}
