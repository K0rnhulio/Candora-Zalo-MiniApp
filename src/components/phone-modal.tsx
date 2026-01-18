import { useAtom, useAtomValue } from "jotai";
import { showPhoneModalAtom, phoneModalCallbackAtom, translationsAtom } from "@/state";
import { Sheet } from "zmp-ui";

export default function PhoneModal() {
  const [showPhoneModal, setShowPhoneModal] = useAtom(showPhoneModalAtom);
  const [phoneModalCallback, setPhoneModalCallback] = useAtom(phoneModalCallbackAtom);
  const t = useAtomValue(translationsAtom);

  const handleRetry = () => {
    setShowPhoneModal(false);
    if (phoneModalCallback) {
      phoneModalCallback();
    }
  };

  const handleClose = () => {
    setShowPhoneModal(false);
    setPhoneModalCallback(null);
  };

  return (
    <Sheet
      visible={showPhoneModal}
      onClose={handleClose}
      autoHeight
      mask
      maskClosable
    >
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-center text-gray-900">
            {t.contactForm.phoneModal.title}
          </h3>
        </div>

        {/* Content */}
        <div className="mb-6">
          <p className="text-center text-gray-600 text-sm leading-relaxed">
            {t.contactForm.phoneModal.content}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 py-3 px-4 text-gray-600 font-medium bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {t.contactForm.phoneModal.cancel}
          </button>
          <button
            onClick={handleRetry}
            className="flex-1 py-3 px-4 text-white font-medium bg-black rounded-lg hover:bg-gray-800 transition-colors"
          >
            {t.contactForm.phoneModal.retry}
          </button>
        </div>
      </div>
    </Sheet>
  );
}
