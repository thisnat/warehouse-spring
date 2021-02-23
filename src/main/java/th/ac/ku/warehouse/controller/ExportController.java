package th.ac.ku.warehouse.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import th.ac.ku.warehouse.model.Product;
import th.ac.ku.warehouse.model.ProductCart;
import th.ac.ku.warehouse.service.ProductService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/export")
public class ExportController {
    private ProductService productService;
    private List<Product> productList;
    private List<ProductCart> cartList;

    public ExportController(ProductService productService, List<Product> productList, List<ProductCart> cartList) {
        this.productService = productService;
        this.productList = productList;
        this.cartList = cartList;
    }

    @GetMapping
    public String getExportPage(Model model) {
        productList = productService.getProducts();
        cartList = productService.getProductCart();
        model.addAttribute("products", productList);
        model.addAttribute("cart",cartList);
        return "export";
    }

    @PostMapping("/remove/{id}")
    @ResponseBody
    public String removeCartList(@PathVariable int id,Model model) {
        Product product;
        ProductCart productCart = productService.getProductCartById(id).get(0);
        try{
            product = productService.getProduct(productCart.getProductId()).get(0);
            Product upProduct = new Product(productCart.getName(),productCart.getNote(),productCart.getCreateDate(),
                    productCart.getProductId(),productCart.getSafetyStock(),productCart.getQuantity()+product.getQuantity(),productCart.getPrice());
            productService.updateProduct(upProduct);

        }catch(Exception e){
            Product reProduct = new Product(productCart.getName(),productCart.getNote(),productCart.getCreateDate(),
                    productCart.getProductId(),productCart.getSafetyStock(),productCart.getQuantity(),productCart.getPrice());
            productService.addProduct(reProduct);
            productService.removeCartItem(id);
            return new Product(null,null,null,0,0,0,0).toString();
        }
        productService.removeCartItem(id);
        return productCart.toString();
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
