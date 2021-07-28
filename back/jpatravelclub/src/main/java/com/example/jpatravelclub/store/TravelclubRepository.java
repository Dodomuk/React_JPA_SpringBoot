package com.example.jpatravelclub.store;

import com.example.jpatravelclub.entity.Travelclub;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
@Repository
public interface TravelclubRepository extends JpaRepository<Travelclub,String> {
}