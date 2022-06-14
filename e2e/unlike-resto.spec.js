Feature("Unlike Resto");

Before(({ I }) => {
  I.amOnPage("/#/like");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement("#restaurants");
  I.see(`You don't have any Favorite Cafe or Restaurant`, "#restaurants");
});

Scenario("Unliking a restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.wait(5);

  I.seeElement(".rest-item");
  I.wait(5);

  I.click(locate(".rest-item a").first());
  I.wait(5);

  I.seeElement("#likeButton");
  I.wait(3);

  I.click("#likeButton");
});
