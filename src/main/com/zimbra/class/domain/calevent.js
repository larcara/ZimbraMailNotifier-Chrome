/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Zimbra Mail Notifier.
 *
 * The Initial Developer of the Original Code is
 * David GUEHENNEC.
 * Portions created by the Initial Developer are Copyright (C) 2013
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

"use strict";

if (!com) {
    var com = {};
}
if (!com.zimbra) {
    com.zimbra = {};
}
if (!com.zimbra.domain) {
    com.zimbra.domain = {};
}

/**
 * Creates an instance of CalEvent.
 *
 * @constructor
 * @this {CalEvent}
 *
 * @param {String}
 *            id the message id
 * @param {String}
 *            name the event name
 * @param {Number}
 *            timestamp the timestamp event start date
 * @param {Number}
 *            duration the duration
 * @param {Number}
 *            timeConf the time configuration
 */
com.zimbra.domain.CalEvent = function(id, name, timestamp, duration, timeConf) {
    this.id = id;
    this.name = name;
    this.startDate = new Date(timestamp);
    this.endDate = new Date(timestamp + duration);
    this.duration = duration;
    this.timeConf = timeConf;
    this.notifier = null;
    // calculate week
    var onejan = new Date(this.startDate.getFullYear(), 0, 1, 0, 0, 0, 0);
    var diffDays = Math.floor((this.startDate.getTime() - onejan.getTime()) / 86400000);
    this.startWeek = Math.floor((diffDays + onejan.getDay()) / 7) + 1;
};
