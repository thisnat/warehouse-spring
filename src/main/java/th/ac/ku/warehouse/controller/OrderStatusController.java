package th.ac.ku.warehouse.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/order")
public class OrderStatusController {

    @GetMapping
    public String getImportPage() {
        return "orderstatus";
    }
}
