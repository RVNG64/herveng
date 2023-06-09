// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "./script";
import "./quill_init";
import "controllers";

import Turbolinks from "turbolinks";
Turbolinks.start();

import Rails from "@rails/ujs";
Rails.start();

import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
import "trix"
import "@rails/actiontext"
