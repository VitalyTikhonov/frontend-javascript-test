// export function renderPortion(data) {
//   const currentEnd = config.currentStart + config.increment;
//   const portion = data.slice(config.currentStart, currentEnd);
//   config.currentStart += config.increment;
//   config.remainder -= config.increment;
//   portion.forEach((article) => {
//     const cardObj = this._createArticle(article, this._keyword);
//     const card = cardObj.render();
//     this._cardSetConfig.push({
//       saveButton: card.querySelector(this._cardSaveBtSel),
//       saveMethod: cardObj._save,
//       deleteMethod: cardObj._delete,
//     });
//     /* tooltip */
//     const tooltip = card.querySelector(this._cardTooltipSel);
//     const texNode = BaseComponent.create(
//       !this._isUserLoggedIn
//         ? this._ttipNonAuthMarkup
//         // eslint-disable-next-line comma-dangle
//         : this._ttipUnsavedMarkup
//     );
//     BaseComponent.insertChild(tooltip, texNode);
//     /* button */
//     if (this._isUserLoggedIn) {
//       this._contents = card;
//       const button = card.querySelector(this._cardSaveBtSel);
//       BaseComponent.enableButton(button);
//     }
//     /* end button */
//     BaseComponent.insertChild(this._cardContainer, card);
//   });
//   /* More button */
//   if (config.remainder > 0 && !this._moreButton) {
//     this._moreButton = BaseComponent.create(this._moreButtonMarkup);
//     BaseComponent.insertChild(this._articleBlockShell, this._moreButton);
//     BaseComponent.setHandlers([
//       {
//         domElement: this._moreButton,
//         event: 'click',
//         handler: this._renderPortionOfArticles,
//       },
//     ]);
//   } else if (config.remainder <= 0 && this._moreButton) {
//     BaseComponent.removeHandlers([
//       {
//         domElement: this._moreButton,
//         event: 'click',
//         handler: this._renderPortionOfArticles,
//       },
//     ]);
//     BaseComponent.removeChild(this._moreButton);
//     this._moreButton = null;
//   }
// }