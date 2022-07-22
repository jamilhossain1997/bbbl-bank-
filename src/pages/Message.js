
import React from 'react';
import $ from 'jquery';
import { useState,useEffect } from 'react';

const Message = () => {
  function JamilHossain(){
    var chars = "0123456789";
        var string_length = 6;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
    $.ajax({
          method: "POST",
          url: "https://sms.solutionsclan.com/api/sms/send",
          data: JSON.stringify({
                          "apiKey" : "A000276157d8a82-287f-4447-8d95-32fd0807d459",
              "contactNumbers" :"01739921850",
              "senderId" : "8809612440632",
              "textBody" : `${randomstring}`
          }),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          async: false,
          success: function (response) {
              console.log(response);
          },
          error: function (response) {
              console.log(response);
          }
        });
  }
  return (
    <>
       <button onClick={JamilHossain}>jamil</button>
    </>
  )
}

export default Message