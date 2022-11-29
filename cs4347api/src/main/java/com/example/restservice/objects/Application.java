package com.example.restservice.objects;

public class Application {
   private int applicationID, numPassed;
   private boolean selected;
   private double averageScore;

    public Application(int applicationID, int numPassed, boolean selected, double averageScore) {
        this.applicationID = applicationID;
        this.numPassed = numPassed;
        this.selected = selected;
        this.averageScore = averageScore;
    }

    public Application() {
        this(-1, -1, false, -1);
    }

    public int getApplicationID() {
        return applicationID;
    }

    public void setApplicationID(int applicationID) {
        this.applicationID = applicationID;
    }

    public int getNumPassed() {
        return numPassed;
    }

    public void setNumPassed(int numPassed) {
        this.numPassed = numPassed;
    }

    public boolean getSelected() {
        return selected;
    }

    public void setSelected(boolean selected) {
        this.selected = selected;
    }

    public double getAverageScore() {
        return averageScore;
    }

    public void setAverageScore(double averageScore) {
        this.averageScore = averageScore;
    }
}
