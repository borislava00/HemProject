import Example from "../src/components/example/Example";
import User from "../src/components/user/User";

export default function Index() {
  return (
    <div>
      <User avatar='https://s3-alpha-sig.figma.com/img/0919/b541/fa9564de6d817ab61e9850e6c0044566?Expires=1638748800&Signature=EXZ9DGUTH9TobjZrZhvkzSQZBm-AU8jSTIh3buMZmXoIqFBc3dRpzBwujjkM-T6eBFZoSyeAnC6y~8ALyHJTbfGOsi7DmCvRJPfPxnGas6OaiSEyASgnqoRdz5IbLgfQBL8mDZv8snefuy3aD6ThK7Ew~YmvjMC7AkMLGaG4gzVCVR5brKAM3sWQWhh0lBKERNdXaBIOmfxBQ0OH3t52ach5bl1WOhCFOlb3TWzHz12fEB~Sk6QnAtAXsH3W23GzMWAaTVzalSkPMzxFYlK8A54FszuMok6Me0iryoEXhmawGrCyF73EbBbNkFpSceYLtflclWsuB9RCwNPmLuwQcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            username='John Doe' size={100} />
    </div>
      //<Example />
  );
}
