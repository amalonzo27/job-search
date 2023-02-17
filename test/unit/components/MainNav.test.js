import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Yondu Carrers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for nagivation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map(
      (item) => item.textContent
    );
    console.log(navigationMenuItems);
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Yondu",
      "How we hire",
      "Yondu University",
      "Jobs",
    ]);
  });

  describe("when the user logs in", () => {
    it("displays user profile picture", async () => {
      render(MainNav);

      let profileImage = screen.queryByRole("img", {
        name: /User Profile Image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });
      await userEvent.click(loginButton);

      profileImage = screen.queryByRole("img", {
        name: /User Profile Image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
