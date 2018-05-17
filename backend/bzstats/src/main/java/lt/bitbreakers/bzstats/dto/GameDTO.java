package lt.bitbreakers.bzstats.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class GameDTO {
    String winner;
    String loser;
    String result;
}
