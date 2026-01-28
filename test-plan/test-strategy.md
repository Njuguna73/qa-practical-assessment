RISK-BASED TEST STRATEGY
Project: E-Commerce Checkout Flow

TOP 3 RISKS:
1. Payment Integrity: User pays, but the database doesn't update to "PAID."
2. Concurrency: Two users buying the last item at the same time.
3. Third-Party Failure: The Payment Gateway (Mobile Money/Card) is down.

PRIORITIZATION:
I would automate the "Happy Path" (Login to Receipt) first. 
Reasoning: This is the critical revenue path. If this fails, the business stops.