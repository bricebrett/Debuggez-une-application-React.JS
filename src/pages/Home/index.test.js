import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findByRole("heading", {
      name: "Nos réalisations",
    });
  });
  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findByRole("heading", {
      name: "Notre équipe",
    });
    await screen.findByText(
      "Une équipe d’experts dédiés à l’ogranisation de vos événements"
    );
  });
  it("a footer is displayed", async () => {
    render(<Home />);
    await screen.findByText("Notre derniére prestation");
    await screen.findByText("Contactez-nous");
  });
  it("an event card, with the last event, is displayed", () => {
    render(<Home />);

    const lastEventCard = screen.getByTestId("card-testid");
    expect(lastEventCard).toBeInTheDocument();

    const lastEventTitle = screen.getByText("Conférence #productCON");
    expect(lastEventTitle).toBeInTheDocument();
  });
});
