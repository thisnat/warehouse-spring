package th.ac.ku.warehouse.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import th.ac.ku.warehouse.model.Product;
import th.ac.ku.warehouse.service.ProductService;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/export")
public class ExportController {
    private ProductService productService;
    private ArrayList<Product> cart;
    private List<Product> productList;

    public ExportController(ProductService productService, List<Product> productList){
        this.productService = productService;
        this.productList = productList;
        this.cart = new ArrayList<>();
    }

    @GetMapping
    public String getImportPage(Model model) {
        productList = productService.getProducts();
        model.addAttribute("products", productList);
        return "export";
    }

    @GetMapping("/cart/{id}")
    public String addCartList(@PathVariable int id, Model model) {
        cart.add(productService.getProduct(id).get(0));
        model.addAttribute("cartList",cart);
        model.addAttribute("products", productList);
        return "export";
    }
}
