package lt.bitbreakers.bzstats.controllers;

import lt.bitbreakers.bzstats.dto.GameDTO;
import lt.bitbreakers.bzstats.dto.UserDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @PostMapping("/")
    @ResponseBody
    public void createUser(){
        System.out.println("Create");
    }


    @GetMapping("/")
    @ResponseBody
    public List<UserDTO> getUsers(){

        return new ArrayList<UserDTO>();
    }

    @GetMapping("/{user_id}")
    @ResponseBody
    public UserDTO getUser(@PathVariable("user_id") long gameId) {
        return new UserDTO();
    }

    @DeleteMapping("/{user_id}")
    public void deleteUser(@PathVariable("user_id") String gameId){

    }

    @GetMapping("/{user_id}/games")
    @ResponseBody
    public List<GameDTO> getUserGames(@PathVariable("user_id") long userId) {

        return new ArrayList<GameDTO>();
    }

}
