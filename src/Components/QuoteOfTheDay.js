import React, { Component } from "react";
import $ from "jquery";

class QuoteOfTheDay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    $(document).ready(function() {
      $.ajax({
        type: "GET",
        url: "http://quotes.rest/qod.json?category=inspire",
        crossDomain: true,
        dataType: "json",
        success: function(res) {
          let quote = res.contents.quotes[0];

          $("#quote-of-the-day").html("");
          $("#quote-of-the-day").append(
            `<p><strong>Inspirational Quote of the Day</strong></p>`
          );
          $("#quote-of-the-day").append(`<p>${quote.quote}</p>`);
          $("#quote-of-the-day").append(`<p><i>~${quote.author}</i></p>`);
          $("#quote-of-the-day").append(
            `<img src="${quote.background}" alt="Quote of the Day Image">`
          );
        },
        error: function() {
          alert(
            "Something seems to have gone wrong. We are working to fix this as soon as possible."
          );
        }
      });
    });
  }

  render() {
    return <div id="quote-of-the-day"></div>;
  }
}
export default QuoteOfTheDay;
