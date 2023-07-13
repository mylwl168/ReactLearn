import React from 'react';
import jsPDF from 'jspdf';

const MyComponent = () => {
  const generatePDF = () => {
    // 创建一个新的jsPDF实例
    const doc = new jsPDF();

    // 创建一个Image对象
    const image = new Image();

    // 图片加载完成后的回调函数
    image.onload = () => {
      // 将图片绘制到PDF中
      doc.addImage(image, 'JPEG', 10, 10, 100, 100);

      // 保存PDF文件
      doc.save('output.pdf');

      // 释放URL对象
      URL.revokeObjectURL(image.src);
    };

    // 创建一个Blob对象
    const blob = new Blob(['path/to/image.jpg'], { type: 'image/jpeg' });

    // 通过createObjectURL方法生成图片的URL
    const imageUrl = URL.createObjectURL(blob);

    // 设置Image对象的src为生成的图片URL
    image.src = imageUrl;
  };

  return (
    <div>
      <button onClick={generatePDF}>生成PDF</button>
    </div>
  );
};

export default MyComponent;
