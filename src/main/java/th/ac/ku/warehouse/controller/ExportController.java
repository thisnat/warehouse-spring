package th.ac.ku.warehouse.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import th.ac.ku.warehouse.model.Product;
import th.ac.ku.warehouse.service.ProductService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/export")
public class ExportController {
    private ProductService productService;
    private List<Product> productList;

    public ExportController(ProductService productService, List<Product> productList){
        this.productService = productService;
        this.productList = productList;
    }

    @GetMapping
    public String getExportPage(Model model) {
        productList = productService.getProducts();
        model.addAttribute("products", productList);
        return "export";
    }

    //not use
    @PostMapping("/update/{id}")
    public String exportProduct(@ModelAttribute Product product,
                                @PathVariable int id,
                                @RequestParam("quantity") int quantity,
                                Model model) {
        product.setQuantity(quantity);
        productService.updateProduct(product);

        return "redirect:export";
    }

    @RequestMapping("/get/{id}")
    @ResponseBody
    public Product getProduct(@PathVariable int id, Model model) {
        return productService.getProduct(id).get(0);
    }
}
