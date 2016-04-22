if((typeof Shopify) === "undefined") {
  var Shopify = {}
}
Shopify.utils = function() {
  return {
    floatToString: function(c, a) {
      var b = c.toFixed(a).toString();
      if(b.match(/^\.\d+/)) {
        return "0" + b
      } else {
        return b
      }
    },
    attributeToString: function(a) {
      if((typeof a) !== "string") {
        a += "";
        if(a === "undefined") {
          a = ""
        }
      }
      return $.trim(a)
    },
    attributesToString: function(c) {
      var a = [];
      for(var b in c) {
        a.push(b + " = " + c[b])
      }
      return a.join(",")
    }
  }
}();
Shopify.api = function() {
  var money_format = "${{amount}}";
  return {
    getMoneyFormat: function() {
      return money_format
    },
    onError: function(XMLHttpRequest, textStatus) {
      var data = eval("(" + XMLHttpRequest.responseText + ")");
      alert(data.message + "(" + data.status + "): " + data.description)
    },
    onCartUpdate: function(cart) {
      alert("There are now " + cart.item_count + " items in the cart.")
    },
    onItemAdded: function(line_item) {
      alert(line_item.title + " was added to your shopping cart.")
    },
    onProduct: function(product) {
      console.log("Received everything we ever wanted to know about ", product)
    },
    formatMoney: function(cents, format) {
      var value = "";
      var patt = /\{\{\s*(\w+)\s*\}\}/;
      var formatString = (format || Shopify.api.getMoneyFormat());
      switch(formatString.match(patt)[1]) {
      case "amount":
        value = Shopify.utils.floatToString(cents / 100, 2).replace(/(\d+)(\d{3}[\.,]?)/, "$1 $2");
        break;
      case "amount_no_decimals":
        value = Shopify.utils.floatToString(cents / 100, 0).replace(/(\d+)(\d{3}[\.,]?)/, "$1 $2");
        break;
      case "amount_with_comma_separator":
        value = Shopify.utils.floatToString(cents / 100, 2).replace(/\./, ",").replace(/(\d+)(\d{3}[\.,]?)/, "$1.$2");
        break
      }
      return formatString.replace(patt, value)
    },
    resizeImage: function(image, size) {
      try {
        if(size == "original") {
          return image
        } else {
          var matches = image.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
          return matches[1] + "_" + size + "." + matches[2]
        }
      } catch(e) {
        return image
      }
    },

    addItem: function(variant_id, quantity, callback) {
      var quantity = quantity || 1;
      var params = {
        type: "POST",
        url: "/cart/add.js",
        data: "properties[Frame]=fizzbuzz&amp;quantity=" + quantity + "&amp;id=" + variant_id,
        dataType: "json",
        success: function(line_item) {
          if((typeof callback) === "function") {
            callback(line_item)
          } else {
            Shopify.api.onItemAdded(line_item)
          }
        },
        error: function(XMLHttpRequest, textStatus) {
          Shopify.api.onError(XMLHttpRequest, textStatus)
        }
      };
      $.ajax(params)
    },

    addItemWithProperties: function(variant_id, quantity, properties, callback) {
      var quantity = quantity || 1;
      if(properties) {
        var data = properties.join("&")+"&quantity="+quantity+"&id="+variant_id;
      } else {
        var data = "quantity="+quantity+"&id="+variant_id;
      }

      var params = {
        type: "POST",
        url: "/cart/add.js",
        data: data,
        dataType: "json",
        success: function(line_item) {
          if((typeof callback) === "function") {
            callback(line_item)
          } else {
            Shopify.api.onItemAdded(line_item)
          }
        },
        error: function(XMLHttpRequest, textStatus) {
          Shopify.api.onError(XMLHttpRequest, textStatus)
        }
      };
      $.ajax(params)
    },

    addItemFromForm: function(form_id, callback) {
      var params = {
        type: "POST",
        url: "/cart/add.js",
        data: $("#" + form_id).serialize(),
        dataType: "json",
        success: function(line_item) {
          if((typeof callback) === "function") {
            callback(line_item)
          } else {
            Shopify.api.onItemAdded(line_item)
          }
        },
        error: function(XMLHttpRequest, textStatus) {
          Shopify.api.onError(XMLHttpRequest, textStatus)
        }
      };
      $.ajax(params)
    },
    getCart: function(callback) {
      $.getJSON("/cart.js", function(cart, textStatus) {
        if((typeof callback) === "function") {
          callback(cart)
        } else {
          Shopify.api.onCartUpdate(cart)
        }
      })
    },
    getProduct: function(handle, callback) {
      $.getJSON("/products/" + handle + ".js", function(product, textStatus) {
        if((typeof callback) === "function") {
          callback(product)
        } else {
          Shopify.api.onProduct(product)
        }
      })
    },
    changeItem: function(variant_id, quantity, callback) {
      var params = {
        type: "POST",
        url: "/cart/change.js",
        data: "quantity=" + quantity + "&amp;id=" + variant_id,
        dataType: "json",
        success: function(cart) {
          if((typeof callback) === "function") {
            callback(cart)
          } else {
            Shopify.api.onCartUpdate(cart)
          }
        },
        error: function(XMLHttpRequest, textStatus) {
          Shopify.api.onError(XMLHttpRequest, textStatus)
        }
      };
      $.ajax(params)
    },
    removeItem: function(variant_id, callback) {
      var params = {
        type: "POST",
        url: "/cart/change.js",
        data: "quantity=0&amp;id=" + variant_id,
        dataType: "json",
        success: function(cart) {
          if((typeof callback) === "function") {
            callback(cart)
          } else {
            Shopify.api.onCartUpdate(cart)
          }
        },
        error: function(XMLHttpRequest, textStatus) {
          Shopify.api.onError(XMLHttpRequest, textStatus)
        }
      };
      $.ajax(params)
    },
    clear: function(callback) {
      var params = {
        type: "POST",
        url: "/cart/clear.js",
        data: "",
        dataType: "json",
        success: function(cart) {
          if((typeof callback) === "function") {
            callback(cart)
          } else {
            Shopify.api.onCartUpdate(cart)
          }
        },
        error: function(XMLHttpRequest, textStatus) {
          Shopify.api.onError(XMLHttpRequest, textStatus)
        }
      };
      $.ajax(params)
    },
    updateCartFromForm: function(form_id, callback) {
      var params = {
        type: "POST",
        url: "/cart/update.js",
        data: $("#" + form_id).serialize(),
        dataType: "json",
        success: function(cart) {
          if((typeof callback) === "function") {
            callback(cart)
          } else {
            Shopify.api.onCartUpdate(cart)
          }
        },
        error: function(XMLHttpRequest, textStatus) {
          Shopify.api.onError(XMLHttpRequest, textStatus)
        }
      };
      $.ajax(params)
    },
    updateCartAttributes: function(data, callback) {
      var params = {
        type: "POST",
        url: "/cart/update.js",
        data: data,
        dataType: "json",
        success: function(cart) {
          if((typeof callback) === "function") {
            callback(cart)
          } else {
            Shopify.api.onCartUpdate(cart)
          }
        },
        error: function(XMLHttpRequest, textStatus) {
          Shopify.api.onError(XMLHttpRequest, textStatus)
        }
      };
      $.ajax(params)
    },
    updateCartNote: function(note, callback) {
      var params = {
        type: "POST",
        url: "/cart/update.js",
        data: "note=" + Shopify.utils.attributeToString(note),
        dataType: "json",
        success: function(cart) {
          if((typeof callback) === "function") {
            callback(cart)
          } else {
            Shopify.api.onCartUpdate(cart)
          }
        },
        error: function(XMLHttpRequest, textStatus) {
          Shopify.api.onError(XMLHttpRequest, textStatus)
        }
      };
      $.ajax(params)
    }
  }
}();