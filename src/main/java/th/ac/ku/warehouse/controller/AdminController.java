package th.ac.ku.warehouse.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @GetMapping
    public String getAdminPage() {
        return "admin";
    }

    @GetMapping("/login")
    public String getLoginPage() {
        return "login";
    }
}
