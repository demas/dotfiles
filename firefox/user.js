user_pref("general.smoothScroll.lines.durationMaxMS", 125);
user_pref("general.smoothScroll.lines.durationMinMS", 125);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.other.durationMaxMS", 125);
user_pref("general.smoothScroll.other.durationMinMS", 125);
user_pref("general.smoothScroll.pages.durationMaxMS", 125);
user_pref("general.smoothScroll.pages.durationMinMS", 125);

user_pref("mousewheel.min_line_scroll_amount", 30);
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", true);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 175);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 175);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 6);
user_pref("toolkit.scrollbox.verticalScrollDistance", 2);

// Отключаем Pocket
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");

// Отключаем WebRTC
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.relay_only", true);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.default_iceservers", "[]");

// Отключаем доступ к датчикам
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.proximity.enabled", false);
user_pref("device.sensors.ambientLight.enabled", false);

// Отключаем асинхронные запросы, используемые для аналитики
user_pref("beacon.enabled", false);
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", false);

// Отключаем метрики производительности
user_pref("dom.enable_performance", false);
user_pref("dom.enable_performance_observer", false);
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("browser.slowStartup.notificationDisabled", false);

user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-hover-on-ssl", false);
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);

// Информация об установленных дополнениях
user_pref("extensions.getAddons.cache.enabled", false);

// Отключаем фингерпринтинг
user_pref("dom.webaudio.enabled", false);
user_pref("privacy.resistFingerprinting", true);

// Отключаем телеметрию и отправку отчетов
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.crashReporting.email", false);
user_pref("browser.tabs.crashReporting.emailMe", false);
user_pref("breakpad.reportURL", "");
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("network.allow-experiments", false);
user_pref("dom.ipc.plugins.reportCrashUR", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

// Отключаем push уведомления
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");

// Убираем утечку DNS
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disableIPv6", true);
user_pref("network.security.esni.enabled", true);
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");

// Отключаем перенаправления
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.captive-portal-service.maxInterval", 0);
user_pref("captivedetect.canonicalURL", "");
