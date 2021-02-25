package th.ac.ku.warehouse.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.lang.Nullable;

@JsonIgnoreProperties(ignoreUnknown = true)
public class History {
    private int id;
    @Nullable
    private String type,note,createDate;

    public History(int id, @Nullable String type, @Nullable String note, @Nullable String createDate) {
        this.id = id;
        this.type = type;
        this.note = note;
        this.createDate = createDate;
    }

    public int getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getNote() {
        return note;
    }

    public String getCreateDate() {
        return createDate;
    }

    @Override
    public String toString() {
        return "History{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", note='" + note + '\'' +
                ", createDate='" + createDate + '\'' +
                '}';
    }
}
