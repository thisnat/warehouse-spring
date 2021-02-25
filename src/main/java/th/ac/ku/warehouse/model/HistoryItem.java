package th.ac.ku.warehouse.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.lang.Nullable;

@JsonIgnoreProperties(ignoreUnknown = true)
public class HistoryItem {
    @Nullable
    private int id,historyId,quantity;
    private String name;
    private double price;

    public HistoryItem(int id, int historyId, int quantity, String name, double price) {
        this.id = id;
        this.historyId = historyId;
        this.quantity = quantity;
        this.name = name;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public int getHistoryId() {
        return historyId;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "HistoryItem{" +
                "id=" + id +
                ", historyId=" + historyId +
                ", quantity=" + quantity +
                ", name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}
