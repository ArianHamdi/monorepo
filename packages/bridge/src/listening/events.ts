import {EventName, EventListener} from '@twa-dev/utils';
import {
  ClipboardTextReceivedPayload,
  InvoiceClosedPayload,
  PopupClosedPayload, QrTextReceivedPayload,
  ThemeChangedPayload, ViewportChangedPayload,
} from './payloads';

/**
 * Map where key is known event name, and value is its listener.
 * @see Documentation https://docs.twa.dev/docs/apps-communication/events
 */
export interface BridgeEventsMap {
  /**
   * User clicked back button.
   * @see https://docs.twa.dev/docs/apps-communication/events#back_button_pressed
   */
  back_button_pressed: () => void;

  /**
   * Invoice was closed.
   * @param payload - invoice close information.
   * @see https://docs.twa.dev/docs/apps-communication/events#invoice_closed
   */
  invoice_closed: (payload: InvoiceClosedPayload) => void;

  /**
   * User clicked main button.
   * @see https://docs.twa.dev/docs/apps-communication/events#main_button_pressed
   */
  main_button_pressed: () => void;

  /**
   * Popup was closed.
   * @param payload - popup close information.
   * @see https://docs.twa.dev/docs/apps-communication/events#main_button_pressed
   */
  popup_closed: (payload: PopupClosedPayload) => void;

  /**
   * Telegram requested to update current application style.
   * @param html - `style` tag inner HTML.
   * @see https://docs.twa.dev/docs/apps-communication/events#set_custom_style
   */
  set_custom_style: (html: string) => void;

  /**
   * Occurs when the Settings item in context menu is pressed.
   * @see https://docs.twa.dev/docs/apps-communication/events#settings_button_pressed
   */
  settings_button_pressed: () => void;

  /**
   * Occurs whenever theme settings are changed in the user's Telegram app
   * (including switching to night mode).
   * @param payload - theme information.
   * @see https://docs.twa.dev/docs/apps-communication/events#theme_changed
   */
  theme_changed: (payload: ThemeChangedPayload) => void;

  /**
   * Viewport was changed.
   * @param payload - viewport information.
   * @see https://docs.twa.dev/docs/apps-communication/events#viewport_changed
   */
  viewport_changed: (payload: ViewportChangedPayload) => void;

  /**
   * Data from QR was extracted.
   * @see https://docs.twa.dev/docs/apps-communication/events#qr_text_received
   */
  qr_text_received: (payload: QrTextReceivedPayload) => void;

  /**
   * QR scanner was closed.
   * @see https://docs.twa.dev/docs/apps-communication/events#scan_qr_popup_closed
   */
  scan_qr_popup_closed: () => void;

  /**
   * Text was extracted from clipboard.
   * @param payload - event information.
   * @see https://docs.twa.dev/docs/apps-communication/events#clipboard_text_received
   */
  clipboard_text_received: (payload: ClipboardTextReceivedPayload) => void;
}

/**
 * Bridge event name which could be listened.
 */
export type BridgeEventName = EventName<BridgeEventsMap>;

/**
 * Returns listener for specified event name.
 */
export type BridgeEventListener<E extends BridgeEventName> =
  EventListener<BridgeEventsMap[E]>;
