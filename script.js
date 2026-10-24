
 (function() {
   // 1. Mobile Sidebar Hamburger
   const hamburger = document.getElementById('hamburgerBtn');
   const sidebar = document.getElementById('sidebar');
   const overlay = document.getElementById('sidebarOverlay');

   if (hamburger && sidebar && overlay) {
     hamburger.addEventListener('click', function() {
       sidebar.classList.toggle('open');
       overlay.classList.toggle('active');
     });
     overlay.addEventListener('click', function() {
       sidebar.classList.remove('open');
       overlay.classList.remove('active');
     });
   }

   // 3. Notification Dropdown Toggle & Filter
             const notifBtn = document.getElementById('notifBtn');
              const notifDropdown = document.getElementById('notifDropdown');
              const notifBadge = document.getElementById('notifBadge');
              const markAllReadBtn = document.getElementById('markAllReadBtn');
              const clearNotifsBtn = document.getElementById('clearNotifsBtn');
              const notifScrollList = document.getElementById('notifScrollList');
              const notifEmptyState = document.getElementById('notifEmptyState');
              const notifUnreadCount = document.getElementById('notifUnreadCount');
              const notifFilterBtns = document.querySelectorAll('.notif-filter-btn');
        
              if (notifBtn && notifDropdown) {
                notifBtn.addEventListener('click', function(e) {
                  e.stopPropagation();
                  const isOpen = notifDropdown.classList.contains('open');
                  notifDropdown.classList.toggle('open');
                  notifBtn.classList.toggle('active', !isOpen);
                });
        
                document.addEventListener('click', function(e) {
                  if (!notifDropdown.contains(e.target) && !notifBtn.contains(e.target)) {
                    notifDropdown.classList.remove('open');
                    notifBtn.classList.remove('active');
                  }
                });
              }
        
              if (markAllReadBtn) {
                markAllReadBtn.addEventListener('click', function() {
                  document.querySelectorAll('.notif-item.unread').forEach(el => {
                    el.classList.remove('unread');
                  });
                  if (notifBadge) notifBadge.classList.add('hidden');
                  if (notifUnreadCount) notifUnreadCount.textContent = '0 New';
                });
              }
        
              if (clearNotifsBtn) {
                clearNotifsBtn.addEventListener('click', function() {
                  if (notifScrollList) notifScrollList.innerHTML = '';
                  if (notifEmptyState) notifEmptyState.style.display = 'block';
                  if (notifBadge) notifBadge.classList.add('hidden');
                  if (notifUnreadCount) notifUnreadCount.textContent = '0 New';
                });
              }
        
              notifFilterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                  notifFilterBtns.forEach(b => b.classList.remove('active'));
                  this.classList.add('active');
                  const filter = this.getAttribute('data-filter');
                  const items = document.querySelectorAll('.notif-item');
                  items.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-type') === filter) {
                      item.style.display = 'flex';
                    } else {
                      item.style.display = 'none';
                    }
                  });
                });
              });
    

   // 4. Interactive Analysis Features
   const irradianceSlider = document.getElementById('irradianceSlider');
   const sliderReadout = document.getElementById('sliderIrradianceReadout');
   const kpiIrradianceVal = document.getElementById('kpiIrradianceVal');

   if (irradianceSlider && sliderReadout) {
     irradianceSlider.addEventListener('input', function() {
       const val = Number(this.value);
       const simulatedKw = (val * 0.00405).toFixed(2);
       sliderReadout.textContent = `${val} W/m² (Simulated Yield: ${simulatedKw} kW)`;
       if (kpiIrradianceVal) {
         kpiIrradianceVal.innerHTML = `${val} <span style="font-size: 16px; font-weight: 600; color: var(--text-muted);">W/m²</span>`;
       }
     });
   }

   const kpiCurrencyCard = document.getElementById('kpiCurrencyCard');
   const currencySavingsVal = document.getElementById('currencySavingsVal');
   const currencyBadge = document.getElementById('currencyBadge');
   const currencySubText = document.getElementById('currencySubText');
   let isPhp = false;

   if (kpiCurrencyCard && currencySavingsVal && currencyBadge) {
     kpiCurrencyCard.addEventListener('click', function() {
       isPhp = !isPhp;
       if (isPhp) {
         currencySavingsVal.textContent = '₱8,320.00';
         currencyBadge.textContent = 'PHP (Click to flip)';
         currencySubText.textContent = 'Avoided Grid Utility Cost (742 kWh @ ₱11.2/kWh)';
       } else {
         currencySavingsVal.textContent = '$148.60';
         currencyBadge.textContent = 'USD (Click to flip)';
         currencySubText.textContent = 'Avoided Grid Utility Cost (742 kWh offset)';
       }
     });
   }

   const cleanPanelsBtn = document.getElementById('cleanPanelsBtn');
   const soilingBar = document.getElementById('soilingBar');
   const soilingPct = document.getElementById('soilingPct');
   const netYieldBar = document.getElementById('netYieldBar');
   const netYieldPct = document.getElementById('netYieldPct');

   if (cleanPanelsBtn && soilingBar && netYieldBar) {
     cleanPanelsBtn.addEventListener('click', function() {
       soilingBar.style.width = '0.3%';
       soilingPct.textContent = '-0.3%';
       soilingPct.style.color = '#16a34a';
       netYieldBar.style.width = '91.3%';
       netYieldPct.textContent = '91.3%';
       cleanPanelsBtn.innerHTML = '<span>✅</span> Panels Spotless!';
       cleanPanelsBtn.style.background = 'linear-gradient(135deg, #16a34a, #15803d)';
       setTimeout(() => {
         cleanPanelsBtn.innerHTML = '<span>✨</span> Clean Panels';
         cleanPanelsBtn.style.background = '';
       }, 3500);
     });
   }

   // 5. Report Generator
   const reportTimeBtns = document.querySelectorAll('.report-time-btn');
   const docMainHeading = document.getElementById('docMainHeading');
   const docDateSubtitle = document.getElementById('docDateSubtitle');
   const docTableInterval = document.getElementById('docTableInterval');
   const docStampTag = document.getElementById('docStampTag');
   const rowPeakPower = document.getElementById('rowPeakPower');
   const rowTotalEnergy = document.getElementById('rowTotalEnergy');
   const rowAvgEfficiency = document.getElementById('rowAvgEfficiency');
   const rowConsumption = document.getElementById('rowConsumption');
   const rowBatterySoc = document.getElementById('rowBatterySoc');
   const rowMaxTemp = document.getElementById('rowMaxTemp');
   const docCostSavings = document.getElementById('docCostSavings');
   const docCarbonVal = document.getElementById('docCarbonVal');
   const docNotesBox = document.getElementById('docNotesBox');

   const reportPresets = {
     day: {
       heading: 'OFFICIAL 24-HOUR DAILY SOLAR AUDIT REPORT',
       subtitle: 'Audit Window: October 24, 2026 (00:00 - 23:59) • Ref: DOC-ESP32-SOL-DAILY-849',
       interval: 'Previous 24 Hours (Rolling Day)',
       stamp: 'DAILY AUDIT CERTIFIED',
       peakPower: '3.84 kW',
       totalEnergy: '21.80 kWh',
       avgEfficiency: '18.4%',
       consumption: '14.20 kWh',
       batterySoc: '68% / 94% SOH',
       maxTemp: '46.8°C',
       costSavings: '$5.45 USD (₱305)',
       carbon: '15.2 kg CO₂',
       notes: '• <strong>Irradiance & Solar Yield:</strong> Clean bell-curve trajectory observed with peak insolation at 12:15 PM.<br>• <strong>MPPT Controller Tracking:</strong> Average tracking efficiency logged at 98.4%. No clipping occurred.<br>• <strong>Preventative Maintenance:</strong> Minor dust accumulation (-2.8%). Regular maintenance on schedule.'
     },
     week: {
       heading: 'OFFICIAL 7-DAY WEEKLY SOLAR PERFORMANCE AUDIT',
       subtitle: 'Audit Window: October 18 - 24, 2026 • Ref: DOC-ESP32-SOL-WEEKLY-402',
       interval: '7 Calendar Days (168 Hours Logged)',
       stamp: 'WEEKLY PERFORMANCE OK',
       peakPower: '3.92 kW',
       totalEnergy: '148.60 kWh',
       avgEfficiency: '18.6%',
       consumption: '98.40 kWh',
       batterySoc: '74% / 94% SOH',
       maxTemp: '47.2°C',
       costSavings: '$37.15 USD (₱2,080)',
       carbon: '104.0 kg CO₂',
       notes: '• <strong>Weekly Summary:</strong> Total energy generated was 148.60 kWh across 7 days, beating solar forecast by 8.4%.<br>• <strong>Grid Interaction:</strong> 50.2 kWh exported to the microgrid; zero reverse current anomalies.<br>• <strong>Thermal Analysis:</strong> Maximum ambient temperature reached 34.2°C with panel surface peaking at 47.2°C.'
     },
     month: {
       heading: 'OFFICIAL 30-DAY MONTHLY ENERGY & BILLING AUDIT',
       subtitle: 'Audit Window: October 1 - 24, 2026 (Month-to-Date) • Ref: DOC-ESP32-SOL-MONTH-194',
       interval: 'Monthly Billing Cycle (Month-to-Date)',
       stamp: 'MONTHLY ESG CERTIFIED',
       peakPower: '4.02 kW',
       totalEnergy: '592.40 kWh',
       avgEfficiency: '18.5%',
       consumption: '412.00 kWh',
       batterySoc: '82% / 93% SOH',
       maxTemp: '48.6°C',
       costSavings: '$148.60 USD (₱8,320)',
       carbon: '382.4 kg CO₂',
       notes: '• <strong>Monthly Economic Yield:</strong> Direct utility bill reduction of $148.60 (₱8,320) achieved.<br>• <strong>Battery Cycle Life:</strong> Battery SOH degradation is negligible at 0.04% for the billing period.<br>• <strong>ESG Compliance:</strong> Avoided 382.4 kg CO₂, equivalent to planting approximately 19 mature trees.'
     },
     year: {
       heading: 'ANNUAL SYSTEM DEGRADATION & ROI AUDIT REPORT',
       subtitle: 'Audit Window: Rolling 365 Days (Annual Audit) • Ref: DOC-ESP32-SOL-ANNUAL-001',
       interval: '365 Days (Annual Cumulative Telemetry)',
       stamp: 'ANNUAL AUDIT PASSED',
       peakPower: '4.10 kW',
       totalEnergy: '7,420.00 kWh',
       avgEfficiency: '18.3%',
       consumption: '5,180.00 kWh',
       batterySoc: '92% SOH (Degradation: 0.6%)',
       maxTemp: '51.4°C',
       costSavings: '$1,855.00 USD (₱103,880)',
       carbon: '5,194.0 kg CO₂',
       notes: '• <strong>Annual Degradation Rate:</strong> Measured PV cell degradation is 0.58%/year, outperforming the 0.70% warranty curve.<br>• <strong>Capital Payback Progress:</strong> Cumulative savings of $1,855.00 tracks at 41.2% total system ROI.<br>• <strong>Hardware Certification:</strong> ESP32 telemetry hardware logged 99.92% system uptime over 8,760 hours.'
     }
   };

   reportTimeBtns.forEach(btn => {
     btn.addEventListener('click', function() {
       reportTimeBtns.forEach(b => b.classList.remove('active'));
       this.classList.add('active');
       const p = this.getAttribute('data-period');
       const data = reportPresets[p];
       if (!data) return;

       docMainHeading.textContent = data.heading;
       docDateSubtitle.textContent = data.subtitle;
       docTableInterval.textContent = data.interval;
       docStampTag.textContent = data.stamp;
       rowPeakPower.textContent = data.peakPower;
       rowTotalEnergy.textContent = data.totalEnergy;
       rowAvgEfficiency.textContent = data.avgEfficiency;
       rowConsumption.textContent = data.consumption;
       rowBatterySoc.textContent = data.batterySoc;
       rowMaxTemp.textContent = data.maxTemp;
       docCostSavings.textContent = data.costSavings;
       docCarbonVal.textContent = data.carbon;
       docNotesBox.innerHTML = data.notes;
     });
   });

   // Export Word Document (.doc) implementation (ESCAPED TAGS TO PREVENT UI GLITCH)
   const exportWordDocBtn = document.getElementById('exportWordDocBtn');
   if (exportWordDocBtn) {
     exportWordDocBtn.addEventListener('click', function() {
       const docElement = document.getElementById('wordDocumentCanvas');
       if (!docElement) return;

       const headingText = docMainHeading ? docMainHeading.textContent : 'SolUSISERO_Solar_Report';
       const filename = `${headingText.replace(/[^a-zA-Z0-9]/g, '_')}.doc`;

       // Separated string concatenations prevent the browser from falsely parsing these as real HTML tags
       const preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>SolUSISERO Solar Audit Report<\/title>" +
         "<style>" +
         "body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11pt; color: #1a1a1a; padding: 30pt; }" +
         "h1 { font-size: 18pt; color: #0f172a; text-align: center; }" +
         "h2 { font-size: 14pt; color: #16a34a; }" +
         "table { width: 100%; border-collapse: collapse; margin-bottom: 16pt; font-size: 10pt; }" +
         "th { background-color: #0f172a; color: white; padding: 6pt 10pt; border: 1pt solid #cbd5e1; }" +
         "td { padding: 6pt 10pt; border: 1pt solid #cbd5e1; }" +
         ".label-cell { background-color: #f8fafc; font-weight: bold; width: 25%; }" +
         ".doc-notes-box { background-color: #f8fafc; border: 1pt dashed #94a3b8; padding: 12pt; margin: 14pt 0; }" +
         ".stamp { color: #16a34a; font-weight: bold; border: 2pt solid #16a34a; padding: 4pt 8pt; display: inline-block; }" +
         "<\/style><\/head><body" + ">";
         
       const postHtml = "<\/body><\/html>";
       const htmlContent = preHtml + docElement.innerHTML + postHtml;

       const blob = new Blob(['\ufeff', htmlContent], {
         type: 'application/msword'
       });

       const url = URL.createObjectURL(blob);
       const downloadLink = document.createElement('a');
       downloadLink.href = url;
       downloadLink.download = filename;
       document.body.appendChild(downloadLink);
       downloadLink.click();
       document.body.removeChild(downloadLink);
       URL.revokeObjectURL(url);
     });
   }

   // Print / PDF Button
   const printReportBtn = document.getElementById('printReportBtn');
   if (printReportBtn) {
     printReportBtn.addEventListener('click', function() {
       window.print();
     });
   }

   // Export CSV Button
   const exportCsvBtn = document.getElementById('exportCsvBtn');
   if (exportCsvBtn) {
     exportCsvBtn.addEventListener('click', function() {
       const csvRows = [
         ["Timestamp", "Solar_Power_kW", "Energy_Consumption_kWh", "Panel_Efficiency_Pct", "Panel_Temp_C", "Battery_SOC_Pct", "Grid_Status"],
         ["2026-10-24 06:00:00", "0.00", "0.85", "0.0", "22.4", "64", "GRID_IMPORT"],
         ["2026-10-24 08:00:00", "1.12", "1.20", "16.8", "27.8", "66", "HYBRID"],
         ["2026-10-24 10:00:00", "2.84", "1.45", "18.2", "38.2", "75", "SOLAR_SELF"],
         ["2026-10-24 12:00:00", "3.84", "1.60", "18.8", "46.8", "88", "NET_EXPORT"],
         ["2026-10-24 14:00:00", "3.25", "1.50", "18.5", "45.2", "94", "NET_EXPORT"],
         ["2026-10-24 16:00:00", "1.80", "1.40", "17.4", "36.8", "94", "SOLAR_SELF"],
         ["2026-10-24 18:00:00", "0.20", "1.85", "14.2", "29.4", "92", "BATTERY_DISCHARGE"]
       ];
       const csvContent = csvRows.map(e => e.join(",")).join("\n");
       const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
       const url = URL.createObjectURL(blob);
       const link = document.createElement("a");
       link.setAttribute("href", url);
       link.setAttribute("download", "solusisero_telemetry_audit.csv");
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
       URL.revokeObjectURL(url);
     });
   }

   // 6. Support Tab Interactive Features
   const quickPingBtn = document.getElementById('quickPingBtn');
   const pingDot1 = document.getElementById('pingSignalDot');
   const pingDot2 = document.getElementById('pingSignalDot2');
   const pingLatencyVal = document.getElementById('pingLatencyVal');

   function triggerPing() {
     if (!pingDot1 || !pingDot2) return;
     pingDot1.classList.add('animating');
     pingDot2.classList.add('animating');
     if (pingLatencyVal) pingLatencyVal.textContent = 'Testing...';

     setTimeout(() => {
       const lat = Math.floor(Math.random() * 8) + 9; // 9-16ms
       if (pingLatencyVal) pingLatencyVal.textContent = `${lat} ms`;
       pingDot1.classList.remove('animating');
       pingDot2.classList.remove('animating');
     }, 1300);
   }

   if (quickPingBtn) {
     quickPingBtn.addEventListener('click', triggerPing);
   }

   const pinRows = document.querySelectorAll('.pin-row');
   const pinDetailTitle = document.getElementById('pinDetailTitle');
   const pinDetailDesc = document.getElementById('pinDetailDesc');
   const pinDetailSpecs = document.getElementById('pinDetailSpecs');

   const pinInfo = {
     gpio34: {
       title: 'GPIO 34 (ADC1_CH6) – Solar Voltage Sensor',
       desc: 'Connects to a precision 1% resistor voltage divider (100kΩ / 10kΩ) to scale high solar string voltages (0–30V DC) into the safe 0–3.3V ADC range of the ESP32.',
       specs: '• <strong>Expected Input:</strong> 0.0V to 3.1V DC<br>• <strong>ADC Resolution:</strong> 12-bit (0–4095 levels, 0.8mV/step)<br>• <strong>Protection:</strong> 3.3V Zener diode clamp recommended<br>• <strong>Multimeter Check:</strong> Probe junction at TP-SOLAR-V'
     },
     gpio35: {
       title: 'GPIO 35 (ADC1_CH7) – ACS712 Current Hall Sensor',
       desc: 'Connected to the analog output of the Hall-effect current sensor measuring panel feed-in amps to the battery bank.',
       specs: '• <strong>Sensitivity:</strong> 185mV/Amp (5A module) or 66mV/Amp (30A module)<br>• <strong>Zero Current Output:</strong> VCC/2 (approx 1.65V DC after 3.3V divider)<br>• <strong>Multimeter Check:</strong> Voltage rises linearly with solar amperage'
     },
     gpio4: {
       title: 'GPIO 4 – DS18B20 OneWire Temp Sensor',
       desc: 'Digital 1-Wire thermal probe epoxied to the underside of the solar panel module for real-time thermal derating calculation.',
       specs: '• <strong>Bus:</strong> Dallas 1-Wire with 4.7kΩ pull-up resistor to 3.3V<br>• <strong>Operating Range:</strong> -55°C to +125°C (±0.5°C accuracy)<br>• <strong>Telemetry Hook:</strong> Feeds temperature reading into <code>data.temperature</code>'
     },
     gpio21: {
       title: 'GPIO 21 (SDA) / 22 (SCL) – I2C Bus (INA219)',
       desc: 'Dedicated hardware I2C interface communicating with high-side bidirectional voltage and current monitor IC (address 0x40).',
       specs: '• <strong>Speed:</strong> 400kHz Fast Mode<br>• <strong>Precision:</strong> High-side shunt resistor voltage drop (±0.1mA resolution)<br>• <strong>Pull-ups:</strong> 2× 4.7kΩ onboard resistors to 3.3V'
     },
     gpio2: {
       title: 'GPIO 2 – Onboard Blue Status LED',
       desc: 'Flashes rhythmically as an operating heartbeat. Double-blink indicates successful HTTP 200 POST to Express server.',
       specs: '• <strong>Heartbeat:</strong> 1 blink/sec during normal transmission<br>• <strong>Error Code:</strong> Rapid 5Hz flashing indicates Wi-Fi AP disconnected'
     },
     vin: {
       title: 'VIN (5V) & GND – Regulated Solar Buck Converter',
       desc: 'Receives clean 5.0V regulated DC power from the LM2596 buck converter connected to the 12V auxiliary microgrid circuit.',
       specs: '• <strong>Input Range:</strong> 4.75V to 5.25V DC (onboard LDO steps down to 3.3V)<br>• <strong>Current Draw:</strong> 180mA peak during Wi-Fi transmission burst<br>• <strong>Filter:</strong> 100uF electrolytic capacitor on supply rail'
     }
   };

   pinRows.forEach(row => {
     row.addEventListener('click', function() {
       pinRows.forEach(r => r.classList.remove('active'));
       this.classList.add('active');
       const p = this.getAttribute('data-pin');
       if (pinInfo[p]) {
         pinDetailTitle.textContent = pinInfo[p].title;
         pinDetailDesc.textContent = pinInfo[p].desc;
         pinDetailSpecs.innerHTML = pinInfo[p].specs;
       }
     });
   });

   const wizardChips = document.querySelectorAll('.wizard-chip');
   const wizardStepsList = document.getElementById('wizardStepsList');

   const wizardSteps = {
     zero: [
       'Verify INA219 sensor is wired to 3.3V and I2C address matches 0x40 in firmware.',
       'Confirm Express server is running on Port 3000 (<code>node telemetry.js</code>).',
       'Check ESP32 Serial Monitor at 115200 baud for HTTP 200 POST responses.'
     ],
     wifi: [
       'Verify 2.4GHz Wi-Fi SSID and password match credentials in <code>secrets.h</code>.',
       'Check ESP32 antenna orientation and ensure RSSI is greater than -75 dBm.',
       'Verify static IP / gateway configuration to prevent DHCP lease timeouts.'
     ],
     temp: [
       'Ensure rear panel heatsink is free of debris and airflow is unobstructed.',
       'Verify DS18B20 4.7kΩ pull-up resistor is firmly seated on 3.3V rail.',
       'Check inverter cooling fan triggers automatically above 45°C.'
     ],
     battery: [
       'Inspect battery state of health (SOH) and check for individual cell drift > 0.05V.',
       'Verify nighttime reverse-current diode prevents solar back-drain.',
       'Check low-voltage disconnect (LVD) threshold is set to 11.8V to avoid deep discharge.'
     ]
   };

   wizardChips.forEach(chip => {
     chip.addEventListener('click', function() {
       wizardChips.forEach(c => c.classList.remove('active'));
       this.classList.add('active');
       const trouble = this.getAttribute('data-trouble');
       const steps = wizardSteps[trouble] || wizardSteps.zero;
       if (wizardStepsList) {
         wizardStepsList.innerHTML = steps.map((s, idx) => `
           <div class="step-item">
             <input type="checkbox" class="step-check" id="st_${idx}"/>
             <label for="st_${idx}" class="step-text">${s}</label>
           </div>
         `).join('');
       }
     });
   });

   const faqQuestions = document.querySelectorAll('.faq-question');
   faqQuestions.forEach(q => {
     q.addEventListener('click', function() {
       const item = this.closest('.faq-item');
       if (item) {
         item.classList.toggle('open');
       }
     });
   });

   const supportTicketForm = document.getElementById('supportTicketForm');
   const feedbackModal = document.getElementById('feedbackModal');
   const closeModalBtn = document.getElementById('closeModalBtn');

   if (supportTicketForm && feedbackModal) {
     supportTicketForm.addEventListener('submit', function(e) {
       e.preventDefault();
       feedbackModal.classList.add('open');
       supportTicketForm.reset();
     });
   }

   if (closeModalBtn && feedbackModal) {
     closeModalBtn.addEventListener('click', function() {
       feedbackModal.classList.remove('open');
     });
     feedbackModal.addEventListener('click', function(e) {
       if (e.target === feedbackModal) {
         feedbackModal.classList.remove('open');
       }
     });
   }

   const viewSnippetBtn = document.getElementById('viewSnippetBtn');
   if (viewSnippetBtn) {
     viewSnippetBtn.addEventListener('click', function() {
       alert("ESP32 Voltage Divider Snippet:\n\nint raw = analogRead(34);\nfloat voltage = (raw / 4095.0) * 3.3 * DIVIDER_RATIO;\nfloat solarWatts = voltage * currentAmps;");
     });
   }

   // 7. Interactive Ambient Background Parallax
   const ambientBg = document.querySelector('.animated-ambient-bg');
   if (ambientBg) {
     window.addEventListener('mousemove', function(e) {
       const mouseX = (e.clientX / window.innerWidth - 0.5) * 24;
       const mouseY = (e.clientY / window.innerHeight - 0.5) * 24;
       ambientBg.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
     });
   }

   // 8. Hash-based Tab Routing
   function activateTabFromHash() {
     const hash = (window.location && window.location.hash) ? window.location.hash.replace('#', '').toLowerCase() : '';
     if (hash && ['dashboard', 'analysis', 'report', 'support'].includes(hash)) {
       const targetNav = document.querySelector(`.nav-item[data-tab="${hash}"]`);
       if (targetNav) {
         targetNav.click();
       }
     }
   }
   activateTabFromHash();
   window.addEventListener('hashchange', activateTabFromHash);
 })();

const trackerHeader = document.getElementById('trackerHeader');
const trackerBody = document.getElementById('trackerBody');
const toggleBtn = document.getElementById('toggleTrackerBtn');
let is3DInitialized = false;

let isSimulating = false;
let liveAngle = 0; 

const manualSlider = document.getElementById('manualTiltSlider');
const tiltDisplay = document.getElementById('currentTiltDisplay');
const trackerStatus = document.getElementById('trackerStatus');
const statusText = document.getElementById('statusText');
const btnRevert = document.getElementById('btnRevert');

trackerHeader.addEventListener('click', function() {
trackerBody.classList.toggle('expanded');
if (trackerBody.classList.contains('expanded')) {
 toggleBtn.textContent = 'Collapse View ▲';
 if (!is3DInitialized) { init3DTracker(); is3DInitialized = true; }
} else {
 toggleBtn.textContent = 'Expand View ▼';
}
});

let scene, camera, renderer, torqueTubeGroup;

// Procedural Texture for VERTICAL Panel (Taller than it is wide)
function createSolarPanelTexture() {
const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 1024;
const ctx = canvas.getContext('2d');

// Vibrant, rich photovoltaic blue
ctx.fillStyle = '#0c3068';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
ctx.lineWidth = 2.5;

const cols = 6; 
const rows = 12;
const cellW = canvas.width / cols;
const cellH = canvas.height / rows;

for (let i = 0; i <= cols; i++) {
 ctx.beginPath(); ctx.moveTo(i * cellW, 0); ctx.lineTo(i * cellW, canvas.height); ctx.stroke();
}
for (let j = 0; j <= rows; j++) {
 ctx.beginPath(); ctx.moveTo(0, j * cellH); ctx.lineTo(canvas.width, j * cellH); ctx.stroke();
}

ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
ctx.lineWidth = 1;
for (let i = 0; i < cols; i++) {
 for (let b = 1; b <= 4; b++) {
   let x = (i * cellW) + (cellW * 0.2 * b);
   ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
 }
}
return new THREE.CanvasTexture(canvas);
}

function init3DTracker() {
const container = document.getElementById('threeJsCanvas');
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 8, 18);

renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Alpha true allows CSS daylight background to show
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// BRIGHT DAYLIGHT SETUP
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

// Hemisphere light simulates sky color from above and ground color from below
const hemiLight = new THREE.HemisphereLight(0xffffff, 0xe2e8f0, 0.7);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
dirLight.position.set(10, 25, 10);
scene.add(dirLight);

const metalMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.3, metalness: 0.8 });
const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.5, metalness: 0.6 });
const panelTex = createSolarPanelTexture();
const panelMat = new THREE.MeshStandardMaterial({ map: panelTex, roughness: 0.1, metalness: 0.5 });

// Ground Base
const padGeo = new THREE.CylinderGeometry(3.5, 3.5, 0.4, 32);
const padMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 1.0 });
const pad = new THREE.Mesh(padGeo, padMat);
pad.position.y = -3;
scene.add(pad);

// Left and Right Pillars (Holding the long sides)
const pillarGeo = new THREE.CylinderGeometry(0.25, 0.35, 4.5, 16);
const leftPillar = new THREE.Mesh(pillarGeo, metalMat);
leftPillar.position.set(-2.5, -0.75, 0); // Closer together since panel is vertical
scene.add(leftPillar);

const rightPillar = new THREE.Mesh(pillarGeo, metalMat);
rightPillar.position.set(2.5, -0.75, 0);
scene.add(rightPillar);

// Rotation Group Pivot
torqueTubeGroup = new THREE.Group();
torqueTubeGroup.position.y = 1.25; 
scene.add(torqueTubeGroup);

// Horizontal Torque Tube spanning between pillars
const tubeGeo = new THREE.CylinderGeometry(0.18, 0.18, 5.4, 16);
tubeGeo.rotateZ(Math.PI / 2);
const tube = new THREE.Mesh(tubeGeo, darkMetalMat);
torqueTubeGroup.add(tube);

// VERTICAL SOLAR PANEL (Width: 4, Depth/Length: 7.5)
const panelGeo = new THREE.BoxGeometry(4, 0.08, 7.5);
const panel = new THREE.Mesh(panelGeo, panelMat);
panel.position.y = 0.25; 
torqueTubeGroup.add(panel);

// Aluminum Frame
const frameGeo = new THREE.BoxGeometry(4.15, 0.12, 7.65);
const frameMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, wireframe: false, roughness: 0.1, metalness: 0.9 });
const frame = new THREE.Mesh(frameGeo, frameMat);
frame.position.y = 0.25;
torqueTubeGroup.add(frame);
panel.position.y = 0.28; 

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2 - 0.05; 
controls.minDistance = 8;
controls.maxDistance = 25;

function animate() {
 requestAnimationFrame(animate);
 controls.update();
 renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
 if(container.clientWidth > 0) {
   camera.aspect = container.clientWidth / container.clientHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(container.clientWidth, container.clientHeight);
 }
});

applyRotation(liveAngle);
}

// Since the supports hold the Left and Right, the axis of rotation is the X-axis (Pitching forward/backward)
function applyRotation(angle) {
if (torqueTubeGroup) {
 torqueTubeGroup.rotation.x = THREE.MathUtils.degToRad(angle);
}
tiltDisplay.innerHTML = `${angle}&deg;`;
}

// INTERACTION LOGIC
function updatePanelTilt(esp32Angle) {
liveAngle = esp32Angle;
if (!isSimulating) {
 applyRotation(liveAngle);
 manualSlider.value = liveAngle;
}
}

manualSlider.addEventListener('input', (e) => {
isSimulating = true;
trackerStatus.className = 'status-badge sim';
statusText.innerHTML = `SIMULATING: <span id="currentTiltDisplay">${e.target.value}&deg;</span>`;
manualSlider.classList.add('active-sim');
btnRevert.classList.add('active');
applyRotation(e.target.value);
});

btnRevert.addEventListener('click', () => {
isSimulating = false;
trackerStatus.className = 'status-badge live';
statusText.innerHTML = `LIVE SYNC: <span id="currentTiltDisplay">${liveAngle}&deg;</span>`;
manualSlider.classList.remove('active-sim');
btnRevert.classList.remove('active');
manualSlider.value = liveAngle;
applyRotation(liveAngle);
});

// ==========================================
// CLICK-TO-LOAD MAP & TELEMETRY LOGIC
// ==========================================
let dashMap, dashCircleLayer;
let isDashMapInitialized = false;

document.getElementById('btnLoadMap').addEventListener('click', function() {
// 1. Hide the blur overlay smoothly
const overlay = document.getElementById('mapOverlayPrompt');
overlay.style.opacity = '0';
setTimeout(() => { overlay.style.display = 'none'; }, 300);

// 2. Initialize map instantly with correct dimensions
if (!isDashMapInitialized) {
initDashboardMap();
} else {
// If already initialized, just force a dimension refresh
dashMap.invalidateSize();
}
});

function initDashboardMap() {
const lat = 14.2756;
const lon = 121.1221;

// Initialize map container
dashMap = L.map('dashboardSolarMap', {
zoomControl: true,
attributionControl: false
}).setView([lat, lon], 13);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
updateWhenIdle: true,
reuseTiles: true
}).addTo(dashMap);

// Add labeled Station Pin
const marker = L.marker([lat, lon]).addTo(dashMap)
.bindPopup("<b>SolUSISERO Station</b><br/>ESP32 Smart Tracker & LDR Node Active.")
.openPopup(); // Opens name tag automatically on first load without double clicking!

marker.on('click', function() {
dashMap.invalidateSize();
dashMap.setView([lat, lon], 13, { animate: true });
});

// Force immediate full layout update
dashMap.invalidateSize();

// Fetch initial regional weather data
fetchDashboardWeather(lat, lon);
isDashMapInitialized = true;
}

async function fetchDashboardWeather(lat, lon) {
try {
const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=shortwave_radiation,cloud_cover`);
const result = await response.json();
const radiation = result.current.shortwave_radiation;
let baselineLux = radiation * 120;
updateLuxTelemetry(Math.round(baselineLux));
} catch (err) {
console.error("Open-Meteo API connection error:", err);
}
}

function updateLuxTelemetry(luxValue) {
const luxDisplay = document.getElementById('liveLuxDisplay');
if (luxDisplay) luxDisplay.textContent = Number(luxValue).toLocaleString();

let zoneColor = '#22c55e'; 
let statusClass = 'sunlight-status-pill status-green';
let statusLabel = 'Excellent Sunlight';
let radiusSize = 3000;

if (luxValue < 1000) {
zoneColor = '#1e293b';
statusClass = 'sunlight-status-pill status-black';
statusLabel = 'No Sunlight (Dark/Overcast)';
radiusSize = 2000;
} else if (luxValue >= 1000 && luxValue <= 25000) {
zoneColor = '#f59e0b';
statusClass = 'sunlight-status-pill status-orange';
statusLabel = 'Slight Sunlight (Partial)';
radiusSize = 2500;
} else {
zoneColor = '#22c55e';
statusClass = 'sunlight-status-pill status-green';
statusLabel = 'Excellent Sunlight (Peak)';
radiusSize = 3500;
}

const badgeEl = document.getElementById('sunlightStatusBadge');
if (badgeEl) {
badgeEl.className = statusClass;
document.getElementById('sunlightStatusText').textContent = statusLabel;
}

if (dashMap) {
if (dashCircleLayer) {
dashCircleLayer.setStyle({ fillColor: zoneColor, color: zoneColor });
dashCircleLayer.setRadius(radiusSize);
} else {
dashCircleLayer = L.circle([14.2756, 121.1221], {
 color: zoneColor,
 fillColor: zoneColor,
 fillOpacity: 0.35,
 radius: radiusSize
}).addTo(dashMap);
}
}
}
