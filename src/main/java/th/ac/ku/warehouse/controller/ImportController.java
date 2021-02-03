package th.ac.ku.warehouse.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import th.ac.ku.warehouse.model.Product;
import th.ac.ku.warehouse.service.ProductService;

@Controller
@RequestMapping("/import")
public class ImportController {
    private ProductService productService;

    public ImportController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping
    public String getImportPage() {
        return "import";
    }

    @PostMapping
    public String importProduct(@ModelAttribute Product product,Model model) {
        productService.addProduct(product);

        return "redirect:home";
    }
}
