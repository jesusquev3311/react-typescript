import { Sub } from "../types.d";

const URL = "http://localhost:5000/subs";

interface SubscribersClass {
  addSubscriber(subscriber: Sub): Promise<void>;
  getSubscribers(): Promise<Sub[]>;
}

class SubscribersProvider implements SubscribersClass {
  public async addSubscriber(subscriber: Sub): Promise<void> {
    try {
      const data = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriber),
      });

      const response = await data.json();
      return response;
    } catch (error) {
      console.error("Error adding subscriber", error);
    }
  }

  public async getSubscribers(): Promise<Sub[]> {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error getting subscribers", error);
      return [];
    }
  }
}

const subscribersProvider = new SubscribersProvider();

export default subscribersProvider;
