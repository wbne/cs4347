package com.example.restservice.identifiers;

public class Interview {
    private boolean pass;
    private double grade;
    private String interviewTime, jobPosition;

    public Interview(boolean pass, double grade, String interviewTime, String jobPosition) {
        this.pass = pass;
        this.grade = grade;
        this.interviewTime = interviewTime;
        this.jobPosition = jobPosition;
    }

    public Interview() {
        this(false, -1, "N/A", "N/A");
    }

    public boolean getPass() {
        return pass;
    }

    public void setPass(boolean pass) {
        this.pass = pass;
    }

    public double getGrade() {
        return grade;
    }

    public void setGrade(double grade) {
        this.grade = grade;
    }

    public String getInterviewTime() {
        return interviewTime;
    }

    public void setInterviewTime(String interviewTime) {
        this.interviewTime = interviewTime;
    }

    public String getJobPosition() {
        return jobPosition;
    }

    public void setJobPosition(String jobPosition) {
        this.jobPosition = jobPosition;
    }
    
}
