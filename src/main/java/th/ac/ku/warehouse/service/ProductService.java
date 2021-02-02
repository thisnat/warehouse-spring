package th.ac.ku.warehouse.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import th.ac.ku.warehouse.model.Product;

import java.util.Arrays;
import java.util.List;

@Service
public class ProductService {
    private RestTemplate restTemplate;

    public ProductService(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    public List<Product> getProducts() {
        String url = "http://localhost:3001/api/products/";

        ResponseEntity<Product[]> response =
                restTemplate.getForEntity(url, Product[].class);

        Product[] products = response.getBody();
        return Arrays.asList(products);
    }

}
