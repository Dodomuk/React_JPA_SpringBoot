package com.example.jpatravelclub.store;


import com.example.jpatravelclub.entity.Travelclub;
import com.example.jpatravelclub.util.NoSuchClubException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
public class TestJPA {

    @Autowired
    private TravelclubRepository clubRepository;

    @PostMapping("list")
    public Page<Travelclub> retrieveAllClub(@PageableDefault(sort="date", direction = Sort.Direction.DESC) Pageable pageable){
         return clubRepository.findAll(pageable);
    }

    @PostMapping("register")
    public Travelclub registerClub(@RequestBody Travelclub club) {
        return clubRepository.save(club);
    }

    @PostMapping("update")
    public Travelclub retrieve(@RequestBody Travelclub club) {
        if (clubRepository.findById(club.getName()).isPresent()) {
            return clubRepository.save(club);
        }
        throw new NoSuchClubException("클럽이 존재하지 않습니다.");
    }

    @PostMapping("delete")
    public void remove(@RequestBody String name) {
        JSONObject json = new JSONObject(name);
        clubRepository.deleteById(json.getString("name"));
    }
}
