package com.system.SystemERP.Controller.Products;

import com.system.SystemERP.Dtos.Products.ProdutosDTO;
import com.system.SystemERP.Entity.Products.Product;
import com.system.SystemERP.Services.Products.ProdutosServices;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RequestMapping("/produtos")
@Tag(name = "Produtos")
@Controller
public class ProductsController {

    private ProdutosServices produtosServices;

    public ProductsController(ProdutosServices produtosServices) {
        this.produtosServices = produtosServices;
    }

    @PostMapping
    @Operation(summary = "Cria um Produto", description = "Cria um Produto")
    public ResponseEntity<Product> createProduct(@RequestBody ProdutosDTO produtosDTO){
        var created = produtosServices.createProducts(produtosDTO);
        return ResponseEntity.created(URI.create("/produtos/" + created.toString())).build();
    }

    @GetMapping("/{idProduto}")
    @Operation(summary = "Busca um produto pelo id", description = "Busca um produto pelo id")
    public ResponseEntity<Product> findById(@PathVariable Integer idProduto) {
        var exist = produtosServices.getById(idProduto);
        return exist.isPresent()
                ? ResponseEntity.ok(exist.get())
                : ResponseEntity.notFound().build();
    }

    @GetMapping
    @Operation(summary = "Busca todos os produtos", description = "Busca todos os produtos")
    public ResponseEntity<List<Product>> findAll() {
        var listProduct = produtosServices.getAll();
        return ResponseEntity.ok(listProduct);
    }

    @DeleteMapping("/{idProduto}")
    @Operation(summary = "Deleta um produto pelo id", description = "Deleta um produto pelo id")
    public ResponseEntity<Void> delete(@PathVariable Integer idProduto) {
        produtosServices.delete(idProduto);
        return ResponseEntity.noContent().build();
    }


}
