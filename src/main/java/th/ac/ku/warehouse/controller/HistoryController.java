package th.ac.ku.warehouse.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import th.ac.ku.warehouse.service.HistoryService;

@Controller
@RequestMapping("/history")
public class HistoryController {
    HistoryService historyService;

    public HistoryController(HistoryService historyService) {
        this.historyService = historyService;
    }

    @GetMapping
    public String getHistoryPage(Model model) {
        model.addAttribute("historyList", historyService.getHistory());

        return "history";
    }
}
