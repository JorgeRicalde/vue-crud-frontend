import Swal from 'sweetalert2';

export const SwalLoading = ({ title, text }: { title: string; text: string }) => {
  Swal.fire({
    title,
    text,
    heightAuto: false,
    allowOutsideClick: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });
};

export const SwalSuccess = ({ title, text }: { title: string; text: string }) => {
  Swal.fire({
    heightAuto: false,
    icon: 'success',
    title,
    text,
  });
};

export const SwalInfo = ({ text }: { text: string }) => {
  Swal.fire({
    heightAuto: false,
    icon: 'info',
    text,
  });
};

export const SwalError = ({
  text,
  title,
  html,
  didClose,
}: {
  title: string;
  text?: string;
  html?: string;
  didClose?: () => void;
}) => {
  Swal.fire({
    heightAuto: false,
    icon: 'error',
    title,
    text,
    html,
    didClose,
  });
};

export const SwalClose = () => {
  Swal.close();
};

type HandleResponseLaravel = (data?: any) => void;

export const StatusDefault: HandleResponseLaravel = () => {
  SwalError({
    title: 'Error!',
    text: 'Error desconocido',
  });
};

export const StatusCode: { [key: number]: HandleResponseLaravel } = {
  401: () => {
    SwalError({
      title: 'Error!',
      text: 'Iniciar sesion primero',
      didClose: () => {
        console.log('Cerrar sesion');
      },
    });
  },
  403: () => {
    SwalError({
      title: 'Error!',
      text: 'Esta acción no está autorizada',
    });
  },
  404: () => {
    SwalError({
      title: 'Error!',
      text: 'Pagina no encontrada',
    });
  },
  405: () => {
    SwalError({
      title: 'Error!',
      text: 'Metodo de Solicitud Incorrecta',
    });
  },
  422: (data) => {
    let errors = '';
    Object.entries(data.errors).forEach(function ([key, value]) {
      errors += `<p class='m-0'>${value}</p>`;
    });
    SwalError({
      title: 'Los datos proporcionados no son válidos.',
      html: errors,
    });
  },
  500: () => {
    SwalError({
      title: 'Error!',
      text: 'Error interno del servidor',
    });
  },
};
