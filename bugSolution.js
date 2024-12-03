This solution attempts to mitigate the issue by recursively calling the DocumentPicker until all files are selected. It's a workaround and not an ideal fix.

```javascript
import * as DocumentPicker from 'expo-document-picker';

const pickMultipleFiles = async () => {
  const results = [];
  let moreFiles = true;
  while (moreFiles) {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        multiple: true,
      });

      if (res.type === 'cancel') {
        moreFiles = false;
      } else if (res.canceled === true) {
        moreFiles = false;
      } else {
        results.push(...res.uri);
        if (res.uris.length < 1) {
          moreFiles = false;
        }
      }
    } catch (err) {
      console.error('DocumentPicker error:', err);
      moreFiles = false;
    }
  }
  console.log('All Selected Files:', results);
  return results;
};
```