package com.example.jpatravelclub.util;

public class NoSuchClubException extends RuntimeException {
	//
	private static final long serialVersionUID= 629649583078793627L;

	public NoSuchClubException(String message) {
		super(message); 
	}
}