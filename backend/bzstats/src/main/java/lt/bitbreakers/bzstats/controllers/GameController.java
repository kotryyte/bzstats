package lt.bitbreakers.bzstats.controllers;

import com.fasterxml.jackson.databind.util.JSONPObject;
import lt.bitbreakers.bzstats.dto.GameDTO;
import lt.bitbreakers.bzstats.model.Game;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/games")
public class GameController {

    @PostMapping("/")
    @ResponseBody
    public void createGame(GameDTO dto){
        System.out.println("Create");
    }

    @GetMapping("/")
    @ResponseBody
    public List<GameDTO> getGames(){

        return new ArrayList<GameDTO>();
    }

    @GetMapping("/{game_id}")
    @ResponseBody
    public GameDTO getGame(@PathVariable("game_id") long gameId) {
        return new GameDTO();
    }

    @DeleteMapping("/{game_id}")
    public void deleteGame(@PathVariable("game_id") String gameId){

    }

}
