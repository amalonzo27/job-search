import type { Mock } from "vitest";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import { useRoute } from "vue-router";
vi.mock("vue-router");

import MainNav from "@/components/Navigation/MainNav.vue";
import { useUserStore } from "@/stores/user";

const useRouteMock = useRoute as Mock;

describe("MainNav", () => {
  useRouteMock.mockReturnValue({ name: "Home" });
  const renderMainNav = () => {
    const pinia = createTestingPinia();

    render(MainNav, {
      global: {
        pligins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it("displays company name", () => {
    renderMainNav();
    const companyName = screen.getByText("Yondu Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for nagivation", () => {
    renderMainNav();

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
      renderMainNav();
      const userStore = useUserStore();

      let profileImage = screen.queryByRole("img", {
        name: /User Profile Image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });
      userStore.isLoggedIn = true;
      await userEvent.click(loginButton);

      profileImage = screen.queryByRole("img", {
        name: /User Profile Image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
